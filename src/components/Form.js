const Form = ({ className, ...props }) => <form className={className} {...props} />

export const Group = ({ className, ...props }) => (
  <div className={`${className || ''} mb-6 flex flex-col`} {...props} />
)

export const Label = ({ className, ...props }) => (
  <label className={`${className || ''} block text-sm mb-2 px-2 text-gray-700`} {...props} />
)

const inputClassName = 'border rounded py-1 px-2 mx-2 text-sm'

export const Input = ({ className, ...props }) => (
  <input className={`${className || ''} ${inputClassName}`} {...props} />
)

export const TextArea = ({ className, ...props }) => (
  <input className={`${className || ''} ${inputClassName}`} {...props} />
)

export const Select = ({ className, ...props }) => (
  <select className={`${className || ''} ${inputClassName} bg-gray-100`} {...props} />
)

export default Form
