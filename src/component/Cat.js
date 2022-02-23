function Card(){
    return(
        
            <div className="cat_card">
                    <span className="cat_text">Omega</span>
            
            </div>
        
    );
}

function Cat(){
    return(
        <div className="main_div">
            <h2 className="heading">Popular cateogory</h2>
            <div className="cat_item">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    );
}

export default Cat;