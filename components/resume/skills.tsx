export default function Skills() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">Technical Skills</div>
      <ul className="space-y-3">
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">React/Next.js</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[80%]" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">TypeScript</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[80%]" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">ASP.NET/C#</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[80%]" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">CSS Stylesheet</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[70%]" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">AWS</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[55%]" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
      </ul>
    </div>
  )
}