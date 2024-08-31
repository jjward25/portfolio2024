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


export default function TestBlogPost() {

  let postDate = '2024-08-31'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
       
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        Text      
      </article>

    </section>
  );
}

