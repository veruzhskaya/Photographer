function MyPhoto({works}) {
    
    return(          
       <div className="container">
        {works.map ((element => {
            const {name, searchTerm, image} = element;
            return (
            <div key={name} className="container_image" >
              <img className="myphoto" src={image} alt="mywork"/>
              <h2 className="container_head">{name}</h2>
            </div>
            )
        }))}
        </div>
        
      
    )
}
export default MyPhoto;