import React, { useContext } from 'react'
import { ProgressBar } from 'react-loader-spinner';
import { Context } from '../context/context'
import img1 from '../assets/react.svg'
import { Link } from 'react-router-dom';

export default function Homepage() {
  const {showList,loading} = useContext(Context);
  // console.log(showList);

  if(loading){
    return(
      <div className="spinner centers">
        <span>
          <ProgressBar
            height="80"
            width="100"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#F4442E'
            barColor = '#0d1c57'
          />
        </span>
        <span className="text">Fetching show data...</span>
      </div>
    )
  }

  return (
    <>
    <div className="center">List of Shows</div>
    <div className="shows-list">
    {
      showList?.map((data , i) => {
        const img = data?.show?.image?.original;
        return(
          <div className="show-detail" key={i}>
              <div className="show-serial">{i+1}</div>
              <div className="show-image">
                  <img src={img?img:"https://static.tvmaze.com/uploads/images/original_untouched/67/168214.jpg"} alt="show-logo" />
              </div>
              <div className="show-title">
                {data.show.name}
              </div>
              <Link to={`/data/${data.show.id}`} className="show-btn" >
                <div className="btn">
                  Read more
                </div>
              </Link>
            </div>

        )
      })
    }
    </div>
    </>
  )
}


