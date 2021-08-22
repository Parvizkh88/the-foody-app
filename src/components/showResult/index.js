import FoodCard from './../foodCard';
import ShowResultHeader from './ShowResultHeader';


const ShowResult = (props) => {

  const { results, title } = props;
  const regEx = /(<([^>]+)>)/ig ; 
 

  return (
    <section className="new-recipes mt-3 row">

      <ShowResultHeader title={title}/>

      <div className="section-body border-1 d-flex flex-wrap justify-content-center py-5 border border-secondary bg-light">
        {
          results.length
            ?
            results.map(item => (
              <FoodCard
                summary={item.summary ? item.summary.replace(regEx, '').substr(0, 100) : ""}
                key={item.id}
                title={item.title}
                image={item.image} 
                id={item.id}
                />)
            )
            :
            <h4>no result</h4>
        }
      </div>
    </section>
  )
}
export default ShowResult;