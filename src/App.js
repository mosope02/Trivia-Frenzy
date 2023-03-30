import { Apicall } from './components/Apicall';
import { useState } from 'react';
import './App.css';
import { Formitems } from './components/Formitems';
import { QuestionPage } from './components/QuestionPage';

function App() {
  const [questions, setQuestions] = useState({})
  const [error, setError] = useState('')
  const handleFormSubmit = async (categ, limit, difficulty) => {
    const categList = categ.map((cate)=>{return cate.value})
    if(categ.length > 0){
      try {
        const response = await Apicall(categList,difficulty,limit)
        setQuestions(response)
        console.log(response);
      } catch (error) {
        setError(error)
      }
    } else {
      alert ('Please Select 1 or more categories')
    }
  }
  return (
    <div className="App">
      <div>
        {
          questions.status === 200 ? <QuestionPage fetchedQuestions={questions.data} /> : error.status > 399 ? <div>OOPS! {error.data}</div> : <Formitems onSubmit={handleFormSubmit} />
        }
      </div>
      
      
    </div>
  );
}

export default App;
