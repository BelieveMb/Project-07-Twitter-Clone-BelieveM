import React from 'react'

function RightBar() {
  return (
    <div className='rightbar'>
        <div className="searchForm">
            <input type="text" placeholder="Search Twitter" />
        </div>

        <div className="trendBloc">
            <div className="trendTitle">
                <h3>Trends for you</h3>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#11111"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>

            <div className="trends">
                <div className="trendsHatag">
                    <b>Trending in Turkey</b>
                    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <circle class="st0" cx="55.091" cy="256" r="55.091"></circle> <circle class="st0" cx="256" cy="256" r="55.091"></circle> <circle class="st0" cx="456.909" cy="256" r="55.091"></circle> </g> </g></svg>
                </div>
                <h4>#SQUID</h4>
                <b>2,6000 Tweets</b>
            </div>

            <div className="trends">
                <div className="trendsHatag">
                    <b>Trending in Turkey</b>
                    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <circle class="st0" cx="55.091" cy="256" r="55.091"></circle> <circle class="st0" cx="256" cy="256" r="55.091"></circle> <circle class="st0" cx="456.909" cy="256" r="55.091"></circle> </g> </g></svg>
                </div>
                <h4>#SQUID</h4>
                <b>2,6000 Tweets</b>
            </div>

            <a href="" className='trendLink'>Show more</a>
        </div>

    </div>
  )
}

export default RightBar