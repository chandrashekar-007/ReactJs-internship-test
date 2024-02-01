import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProgressBar } from 'react-loader-spinner';
import { API2, Context } from '../context/context';
import HTMLtoReact from 'html-to-react'
import axios from 'axios';

export default function ShowData() {
  
  const [singleShow, setSingleShow] = useState([]);
  const { id } = useParams();
  const { loading,  setLoading } = useContext(Context);
  const fetchSingleShow = async () => {
    const  {data}  = await axios.get(`${API2}/${id}`);
    setSingleShow(data);
    setLoading(false)
  }
  
  const {
    image , name , premiered, summary
  } = singleShow;

  const showSummary = summary
  const Parser = new HTMLtoReact.Parser();
  const parseElem = Parser.parse(showSummary);
  
  useEffect(() => {
    fetchSingleShow()
  }, [id])


  if (loading) {
    return (
      <div className="spinner centers">
        <span>
          <ProgressBar
            height="80"
            width="100"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='#F4442E'
            barColor='#0d1c57'
          />
        </span>
        <span className="text">Fetching show details...</span>
      </div>
    )
  }

  return (
    <>
      <div className="centers">
        {/* Show Details */}
              <div className="single-movie-container">
              <div className="movie-image">
                <img src={image === "N/A" ?"https://static.tvmaze.com/uploads/images/original_untouched/67/168214.jpg" : image?.original} height="280" width="220" alt="movie-img" />
              </div>
              <div className="description">
                <h2>
                  {name}
                </h2>
              
                <div className="details">
                  <h4>
                    {premiered === "N/A" ? "19 sept 2006" : premiered}
                  </h4>
                  <h5 className='p-tag'>
                    {summary === "N/A" ? "No Description" : parseElem}
                  </h5>
                </div>
                <NavLink to="/book" className="button">
                  <h3>Book a Ticket</h3>
                </NavLink>
              </div>
            </div>
      </div>
    </>
  )
}
