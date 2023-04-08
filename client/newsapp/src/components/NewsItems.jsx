
const NewsItems = ({items}) => {
  return (
    <div>
        <div className="d-flex justify-content-center container">
          <div className="row">
            {items.map((val) => {
              return (
                <div className="col-sm" key={val.url}>
                  <div className="card m-4" style={{ width: "18rem" }}>
                    <img src={val.imageUrl} style={{height:"200px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title" style={{height: '100px'}}>{val.title.length > 90 ? val.title.slice(0,90) : val.title}....</h5>
                      <p className="card-text" style={{height: '160px'}}>
                        {val.content.length > 150 ? val.content.slice(0,150) : val.content }...
                      </p>
                      <a href={val.url} target="_blank" className="btn btn-primary">
                        Open news
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  )
}

export default NewsItems;

