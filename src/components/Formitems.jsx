import React, {useState} from 'react'
import { MultiSelect } from 'react-multi-select-component'


export const Formitems = (props) => {

  //categories to be used with the multi-select component
  const categories = [
    {label:'Arts & Literature', value:'arts_and_literature'},
    {label:'Film & TV', value:'film_and_tv'},
    {label:'Food & Drink', value:'food_and_drink'},
    {label:'General Knowledge', value:'general_knowledge'},
    {label:'Geography', value:'geography'},
    {label:'History', value:'history'},
    {label:'Music', value:'music'},
    {label:'Science', value:'science'},
    {label:'Society & Culture', value:'society_and_culture'},
    {label:'Sport & Leisure', value:'sport_and_leisure'}
  ]
  // const [formData, setFormData] = useState({difficulty:'easy', limit:'5'})
  const [difficulty, setDifficulty] = useState('easy')
  const [limit, setLimit] = useState('5')
  const [categoriesList, setCategoriesList] = useState([{label:'General Knowledge', value:'general_knowledge'}])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(categoriesList, limit, difficulty);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value)
  }
  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  

  return (
    <>
      <div className='bg-[#FCE0B0] h-[100vh]'>
          <h1 className='text-center text-3xl lg:text-5xl font-serif pt-12 pb-8 text-[#1A1918] '>Welcome to Trivia Frenzy</h1>
          <form onSubmit={handleSubmit} className="w-[96%] max-w-sm md:max-w-3xl mx-auto bg-[#49302B] text-white font-light px-3 py-5 rounded-md">
              <div className='flex flex-nowrap gap-4 md:gap-6 py-6'>
                <p className='text-lg font-semibold inline-block'>Categories:</p>
                <MultiSelect options={categories} className="text-black font-semibold inline-block w-full" value={categoriesList} onChange={setCategoriesList} hasSelectAll={false} disableSearch required />
              </div>
        
              <div className='flex flex-nowrap gap-4 pb-10'>
                <span className='text-lg font-semibold inline-block'>Difficulty:</span>
                <select name='difficulty' className='inline-block w-5/12 max-w-[100px] ml-4 lg:ml-5 p-2 bg-[#FDFBEE] text-black font-medium outline-none rounded-lg' value={difficulty} onChange={handleDifficultyChange}>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className='flex flex-nowrap gap-4 mt-4'>
                <span className='inline-block'>No of Questions: {limit}</span>
                <input type="range" min='1' name='limit' className='inline-block w-9/12 ' value={limit} max='20' onChange={handleLimitChange} />
              </div>
              <div className='text-right mt-6 pr-4'><button className='bg-[#FDAB71] py-3 px-5 rounded-2xl font-semibold' type="submit">START</button></div>
              
          </form>
      </div>
    </>
  )
}