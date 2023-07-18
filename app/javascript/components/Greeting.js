import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingsSlice';
import { Link } from 'react-router-dom';

function Greeting() {
  const {greetings, loading, error} = useSelector((state) => state.greeting);
  console.log("loading!!", loading)
  console.log("greeting!!", greetings)
  console.log("error!!", error)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <section>
      <h1>Greeting</h1>
      {
        loading ? "loading" : (
      <h3>{greetings.greetings.message}</h3>
        )
      }

    </section>
  );
}

export default Greeting;
