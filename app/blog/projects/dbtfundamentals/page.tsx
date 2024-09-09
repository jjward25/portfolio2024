const DBTFundamentals = () => {

  return (
    <section className="w-full h-full flex flex-col text-black">
        <h1 className="font-semibold text-xl">DBT Fundementals</h1>
        <p className="text-neutral-500 text-sm mt-1">A few screenshots from my work in the <a className="underline" href="https://learn.getdbt.com/courses/dbt-fundamentals" title="DBT Fundamentals Course">DBT Fundamentals</a> course.</p>

        <div className="flex flex-col">

          <h2 className="text-lg font-semibold mt-12">1. Materializing Views & First Production Run</h2>
          <img
                src='/projects/dbtFundamentals/dbtf-materializing-views.png'
                alt='Materializing Views'
                className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out m-4 mb-0 border border-neutral-500"
              />
          <p className="text-neutral-500 text-xs mt-1 px-4">The tutorial doesn't mention Big Query needs the "--full-refresh" command here; after solving for that and separating our cleaning code from transforming code, we have our first production run - also shown below.</p>

          <img
                src='/projects/dbtFundamentals/dbtf-production-run.png'
                alt='Production Run'
                className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out m-4 mb-0 border border-neutral-500"
              />

          <h2 className="text-lg font-semibold mt-12">2. Testing with YML Instructions & Creating Documentation</h2>
          <img
                src='/projects/dbtFundamentals/dbtf-yml-tests.png'
                alt='YML Tests'
                className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out m-4 mb-0 border border-neutral-500"
              />
            <p className="text-neutral-500 text-xs mt-1 px-4">Added and successfuly ran some tests for unique values, specific values, and table relationships.</p>

          <h2 className="text-lg font-semibold mt-12">3. Re-organizing File Structure to Staging and Marts Folders</h2>
          <img
                src='/projects/dbtFundamentals/dbtf-4a-staging-and-marts.png'
                alt='YML Tests'
                className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out m-4 mb-0 border border-neutral-500"
              />
          <p className="text-neutral-500 text-xs mt-1 px-4">With marts folders for each department.</p>

          <h2 className="text-lg font-semibold mt-12">4. Creating a Source Reference with a YML file</h2>          
          <img
                src='/projects/dbtFundamentals/dbtf-5.png'
                alt='YML Tests'
                className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out m-4 mb-0 border border-neutral-500"
              />
          
          <h2 className="text-lg font-semibold mt-12">{`5. Custom Test: Total Amount Always >= 0`}</h2>          
          <img
                src='/projects/dbtFundamentals/customTest.png'
                alt='YML Tests'
                className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out m-4 mb-0 border border-neutral-500"
              />
         

         <h2 className="text-lg font-semibold mt-12">{`6. Block Documentation + Final Run`}</h2>          
          <img
                src='/projects/dbtFundamentals/dbtf-7.png'
                alt='YML Tests'
                className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out m-4 mb-0 border border-neutral-500"
              />

          <img
                src='/projects/dbtFundamentals/finalRun.png'
                alt='YML Tests'
                className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out m-4 mb-0 border border-neutral-500"
              />


        </div>

      
    </section>
  );
}

export default DBTFundamentals;
