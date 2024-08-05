

/* 
*/


const Btns = document.querySelectorAll(".state_buttons .btn");
const TimeTrackCont = document.querySelector(".time_track_cards_container");

function activateBtns (ClickedBTN) {
	Btns.forEach((btn) => {
		btn.classList.remove("active");
		ClickedBTN.classList.add("active")
	})
}

let TimeTrackHTML = ` 
	<div class="card work_card">
        <div class="dark_blue">
          <div class="time_name_and__">
            <p class="time_name">
              Work
            </p>
            <p class="and__">
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div class="time_hours">
            <p class="time">
              32hrs 
            </p>
            <p class="hours_in_specific_time">
              Last week - 7hrs
            </p>
          </div>
        </div>
      </div>

      <div class="card play_card">
        <div class="dark_blue">
          <div class="time_name_and__">
            <p class="time_name">
              Play
            </p>
            <p class="and__">
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div class="time_hours">
            <p class="time">
              10hrs
            </p>
            <p class="hours_in_specific_time">
             Last week - 8hrs
            </p>
          </div>
        </div>
      </div>

      <div class="card study_card">
        <div class="dark_blue">
          
        <div class="time_name_and__">
          <p class="time_name">
            Study
          </p>
          <p class="and__">
            <i class="fa-solid fa-ellipsis"></i>
          </p>
        </div>
        <div class="time_hours">
          <p class="time">
            4hrs 
          </p>
          <p class="hours_in_specific_time">
           Last week - 7hrs
          </p>
        </div>
        </div>
      </div>

      <div class="card exercise_card">
        <div class="dark_blue">
          <div class="time_name_and__">
            <p class="time_name">
              Exercize
            </p>
            <p class="and__">
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div class="time_hours">
            <p class="time">
              4hrs 
            </p>
            <p class="hours_in_specific_time">
             Last week - 5hrs
            </p>
          </div>
        </div>
      </div>

      <div class="card social_card">
        <div class="dark_blue">
          <div class="time_name_and__">
            <p class="time_name">
              Social
            </p>
            <p class="and__">
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div class="time_hours">
            <p class="time">
              5hrs 
            </p>
            <p class="hours_in_specific_time">
             Last week - 10hrs
            </p>
          </div>
        </div>
      </div>

      <div class="card self_car_card">
        <div class="dark_blue">
          <div class="time_name_and__">
            <p class="time_name">
              Self care
            </p>
            <p class="and__">
              <i class="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div class="time_hours">
            <p class="time">
              2hrs
            </p>
            <p class="hours_in_specific_time">
             Last week - 2hrs
            </p>
          </div>
        </div>
    </div>
`
TimeTrackCont.innerHTML = TimeTrackHTML

function LoadRightContent (btnName) {
	let TimeTrackData = [];
	const promise = fetch('./data.json')
	promise.then((promiseData) => {
		if(!promiseData.ok){
			throw new Error(`there is problem with ${promiseData.status}`)
		}
		return promiseData.json()
	}).then((data) => {
		for(let i = 0; i < data.length -1; i++) {
			TimeTrackData.push(data[i])

		}
		if (btnName === "daily") {    
			TimeTrackHTML = ''
			TimeTrackData.forEach((each) => {  
					TimeTrackHTML += `  
							<div class="card ${each.title.toLowerCase()}_card">  
									<div class="dark_blue">  
											<div class="time_name_and__">  
													<p class="time_name">  
															${each.title}  
													</p>  
													<p class="and__">  
															<i class="fa-solid fa-ellipsis"></i>  
													</p>  
											</div>  
											<div class="time_hours">  
													<p class="time">  
															${each.timeframes.daily.current}hrs  
													</p>  
													<p class="hours_in_specific_time">  
															Last week - ${each.timeframes.daily.previous}hrs  
													</p>  
											</div>  
									</div>  
							</div>  
					`;  
			});  
	
			TimeTrackCont.innerHTML = TimeTrackHTML 
		}
		else if(btnName === "weekly") {  
			TimeTrackHTML = '';
			TimeTrackData.forEach((each) => {  

					TimeTrackHTML += `  
							<div class="card ${each.title.toLowerCase()}_card">  
									<div class="dark_blue">  
											<div class="time_name_and__">  
													<p class="time_name">  
															${each.title}  
													</p>  
													<p class="and__">  
															<i class="fa-solid fa-ellipsis"></i>  
													</p>  
											</div>  
											<div class="time_hours">  
													<p class="time">  
															${each.timeframes.weekly.current}hrs  
													</p>  
													<p class="hours_in_specific_time">  
															Last week - ${each.timeframes.weekly.previous}hrs  
													</p>  
											</div>  
									</div>  
							</div>  
					`;  
			});  
			TimeTrackCont.innerHTML = TimeTrackHTML 
		}
		else if(btnName === "monthly") {  
			TimeTrackHTML = '';
			TimeTrackData.forEach((each) => {  

					TimeTrackHTML += `  
							<div class="card ${each.title.toLowerCase()}_card">  
									<div class="dark_blue">  
											<div class="time_name_and__">  
													<p class="time_name">  
															${each.title}  
													</p>  
													<p class="and__">  
															<i class="fa-solid fa-ellipsis"></i>  
													</p>  
											</div>  
											<div class="time_hours">  
													<p class="time">  
															${each.timeframes.monthly.current}hrs  
													</p>  
													<p class="hours_in_specific_time">  
															Last week - ${each.timeframes.monthly.previous}hrs  
													</p>  
											</div>  
									</div>  
							</div>  
					`;  
			});  
			TimeTrackCont.innerHTML = TimeTrackHTML 
		}
		console.log(btnName)
	}).catch((error) => {
		console.error(error)
	});
}

Btns.forEach((btn) => {
	const BtnName = btn.dataset.name;
	btn.addEventListener("click", () => {
		activateBtns(btn);
		LoadRightContent(BtnName)
	})
})


