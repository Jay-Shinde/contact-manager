import Concard from "./Concard";

const Conlist = (props)=>{
    return(
        <>
        <div className="container">
            Contact List

            {
                props.contact.map((con)=>{
                    return(
                        <Concard con={con} key={con.id}/>
                    );
                })
            }
            
        </div>
        </>
    );
};
export default Conlist;