const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPorcentajeFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}

const TipPorcentajeForm = ({setTip, tip} : TipPorcentajeFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form action="">
        { tipOptions.map(tipOption => 
          <div 
            key={tipOption.id}
            className="flex gap-2"
          >
            <label>{tipOption.label}</label>
            <input 
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              // El "+" convierte el value en number
              onChange={e => setTip(+e.target.value) }
              checked={tipOption.value === tip}
            />
          </div>
        )}

       
      </form>
    </div>
  )
}

export default TipPorcentajeForm