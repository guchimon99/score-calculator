import { Link } from 'react-router-dom'
import { useCalculators } from '../../hooks/entities'

const Calcurators = () => {
  const calcurators = useCalculators()

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="py-4 px-2">
            <div className="font-bold text-2xl">スコア計算機</div>
          </div>
          <div>
            {calcurators.map(calcurator =>
              <Link key={calcurator.id} to={`/calculators/${calcurator.id}`} className="block mb-1 pl-4">
                <div className="pr-4 py-3">
                  <div className="text-lg">{calcurator.title}</div>
                </div>
                <div className="border-b" />
              </Link>
            )}
          </div>
      </div>
    </>
  )
}

export default Calcurators
