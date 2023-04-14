import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/barberiajuan-e6bd2.appspot.com/o/Barberia.jpg?alt=media&token=afcc25c7-ae76-46fe-b7a5-0dbeaf5659f0" alt="foto" className="img-fluid w-100"/>
                    </div>
                        <div className="col-12 col-md-4">
                            <Agenda></Agenda>
                        </div>
                </div>
            </div>
        </section>
        </>
    )
}