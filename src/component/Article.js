function Card_Article(){
    return(
        <>
        <div className="art_card">
            <div className="img_art">
                <img alt="p2" src="./p2.png" />
            </div>
            <div className="art_card_detail">
                <p className="p1">Best Multivitamin 2021-Your ultimate guide to ultimate</p>
                <p className="p2">simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                <a href="#">Read More</a>
            </div>
        </div>
        </>
    );
}
function Article(){
    return(
        <>
        <div className="main_article">
            <h2>Latest Article</h2>
            <div className="art_item">
                <Card_Article/>
                <Card_Article/>
                <Card_Article/>
                <Card_Article/>
                <Card_Article/>
            </div>
        </div>
        </>
    );
}

export default Article