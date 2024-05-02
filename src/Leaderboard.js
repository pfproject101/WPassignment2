import { useState, useEffect } from "react";

const Leaderboard = (props) => {

    // const temp = [
    //     {image:"https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg", name:"Avengers", games:29, score:515678},
    //     {image:"https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg", name:"Foo Fighters", games:27, score:509873},
    //     {image:"https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg", name:"The Ultimate", games:29, score:4133249},
    //     {image:"https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg", name:"The Musketeers", games:25, score:299985}
    // ]

    const [teams, setTeams] = useState(null);

    function fetchTeams(){
        fetch('http://localhost:4000')
            .then((data)=>{
                if (data.ok){
                    data.json()
                        .then((result)=>{
                            console.log("data from db:", result);     
                            setTeams(result)
                            assignRank()
                        })
                }
            })
    }

    function assignRank(){
        setTeams((teams)=>{
            teams =[...teams].sort((a, b)=>b.score-a.score);

            let c = 1
            teams.forEach(( team )=>{
                team.rank = c;
                c++;
            })
            return teams;
        })

    }
    useEffect(()=>{
        fetchTeams();
        const interval = setInterval(fetchTeams, 3500);
        return () => clearInterval(interval);
    }, []);
    

    return ( 
        <div>
        <br/><h1><b>Leaderboard</b></h1><br/><br/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th style = {{color: '#004e99'}} scope="col">RANK</th>
                            <th className="d-flex align-items-center justify-content-start" style = {{color: '#004e99'}} scope="col">TEAM NAME</th>
                            <th style = {{color: '#004e99'}} scope="col">TOTAL GAMES PLAYED</th>
                            <th style = {{color: '#004e99'}} scope="col">SCORE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams &&
                                teams.map((team) => {
                                    return (
                                        <tr key = {team._id}>
                                        <th scope="row">
                                            {team.rank== 1 && 
                                                <svg 
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d4af37" className="bi bi-award" viewBox="0 0 16 16" >
                                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                                                </svg>
                                            }
                                            {team.rank==2 &&
                                                <svg 
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cd7f32" className="bi bi-award" viewBox="0 0 16 16" >
                                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                                                </svg>
                                            }
                                            {team.rank==3 &&
                                                <svg 
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" className="bi bi-award" viewBox="0 0 16 16">
                                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                                                </svg>
                                            }

                                            {
                                            team.rank!=1 && team.rank!=2 && team.rank!=3 &&  
                                                <span>{team.rank}</span>
                                            }
                                        </th>
                                        <td className="d-flex align-items-center justify-content-start">
                                            <img className="rounded-circle" style={{width:"5vh", height: "5vh", marginRight:"2vw"}} src = {team.image} alt="avatar"/>
                                            {team.name}
                                        </td>
                                        <td>{team.games}</td>
                                        <td>+{[...team.score.toString().slice(0, 2),"," , team.score.toString().slice(2)]}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Leaderboard;