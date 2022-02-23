import StarIcon from "@material-ui/icons/Star";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import CloudUploadIcon  from "@material-ui/icons/CloudUpload";



function Card(){
    return(
        <>
            <div className="detail">
                <img  className="img"
                alt="pic"
                src="https://m.media-amazon.com/images/I/618YbElLxYS._SY450_.jpg"/>
                <div className="text">
                    <div className="ProductName">
                        TrueBasic MultiVitamin,90
                        tablets(),Unflavered
                    </div>
                    <div className="Review">
                        4.5<span><StarIcon style={{fontSize:10}}/></span>145 Review
                    </div>
                    <div className="icon">
                        <span className="bolt">
                            <OfflineBoltIcon/>                           
                        </span>
                        <span className="bolt1">
                            <CloudUploadIcon/>                          
                        </span>
                        <span className="bolt2">
                            <OfflineBoltIcon/>                           
                        </span>
                    </div>
                    <div className="Price">
                    Rs-989
                    </div>
                </div>
            </div>  
        </>
    );
}

function Search(){
    return(
        <>
        <div className="Search">
            <div>

            </div>
            <div className="product">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        </>
    );
}

export default Search;