function formatDate(date) {
      
  let currentDate = new Date().getTime();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  let fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (daysAgo < 1) {
    return 'Today';
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7)
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30)
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365)
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

const Papp = () => {

  let postDate = '2025-02-07'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert w-full h-full flex flex-col text-black">
        <h1 className="font-bold text-3xl">Simple, Locally Hosted LLM Chatbots - With Memory!</h1>
        <p className="text-neutral-500 text-sm mt-4 mb-0">{`I used `}
          <a href="https://www.youtube.com/watch?v=_6SlPLNEpzQ" title="Ollama" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">Ollama</a>{`, `}
          <a href="https://www.youtube.com/watch?v=x7X9w_GIm1s" title="Python" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">Python</a>
            {`, and simple txt files to create private, locally hosted chatbots with memory.`}
            <a href="https://github.com/jjward25/assistantPublic/tree/main" title="Github" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">{`(Github)`}</a>
            </p> 

          <p className="text-neutral-500 text-sm mb-0">In the video below you'll see two basic chatbots:</p>
          <ol className="text-neutral-500 text-sm my-0 mt-2"> 
            <li>A personal assistant that can help you with your tasks and schedule, and answer general questions.</li>
            <li>Specialty bots that save entire chat histories and retain context across spanish lessons, therapy sessions, meal preps and more.</li>
          </ol>

          <div className="w-full flex flex-col justify-center items-center my-6">
            <img
                src='/projects/localLLMs/dualLLMs.png'
                alt='Chatbots' 
                className="w-full h-full object-cover md:hover:scale-150 hover:duration-500 transition-all ease-out mb-0 border border-neutral-500 mx-auto"
              />
          </div>


        <p className="text-neutral-500 text-sm mt-2 mb-0">{`The personal assistant has more complex CRUD commands that can be triggered by specific phrases.  These alert the agent to update the task.txt file to create/complete/add/delete tasks.  The other chatbots bulk save conversations to 'Memory' when you complete a session ('cmd quit').`}</p>
        <p className="text-neutral-500 text-sm mt-4 mb-0">{`This style of script can work with any model downloaded from Ollama as long as your computer can run it.  In the video below I am running these on an HP laptop with no GPU using Mistral.`}</p>
        <p className="text-neutral-500 text-sm mt-4 mb-0">{`If you need additional speed, you adjust this to send your requests to a remote API like OpenAI or Anthropic.  You can also limit how many past conversations are kept in memory.`}</p>

        <div className="flex flex-col">

        <div className="w-full flex flex-col justify-center items-center pt-8">
          
           <div className="w-full h-full flex justify-center items-center mx-auto my-auto">
               <iframe
                  className="responsive-video w-full h-full min-h-[350px]"
                  src="https://www.youtube.com/embed/DMu4wY3bzUc?si=UlZh0dEZxU_iJZVv"
                  title="Local Chatbot with Memory"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                ></iframe>
          </div>
        </div>
        <p className="text-neutral-500 text-xs mt-2 md:mt-4 ">{``}</p>
        </div>

      </article>
    </section>
  );
}

export default Papp;
