import { useEffect, useState } from "react";
import Tabs from "../Tabs";
import Jobinfo from "../jobinfo";
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [jobs,setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0);
  const fetchJobs = async ()=>{
    const response = await fetch(url);
    let data = await response.json();
    
    setJobs(data);
    setIsLoading(false);
  }
  
  useEffect(()=>{
    fetchJobs();
  },[])

  


  if (isLoading) {
    return (<section className="jobs-center">
      <div className="loading"></div>
    </section>)
  }
  return <section className="jobs-center">
    <Tabs setCurrentItem={setCurrentItem} currentItem={currentItem} jobs={jobs}></Tabs>
    <Jobinfo currentItem={currentItem} jobs = {jobs}></Jobinfo>
  </section>
};
export default App;
