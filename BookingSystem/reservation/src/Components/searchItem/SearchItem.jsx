import './searchItem.css'

export default function SearchItem({item}) {
  return (
    <div className='searchItem'>
      <img src={item.photos[0]} 
      alt="" 
      className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">free Airport taxi</span>
        <span className="siSubtitle">Studio Apartment with air condition</span>
        <span className="siFeatures">Entire studio . 21m2  1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can Cancel Later, So lock in this good price today!</span>
      </div>
      <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
        </div>      
          <div className="siDetailsTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Include Taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
          </div>
      </div>
    </div>
  )
}
