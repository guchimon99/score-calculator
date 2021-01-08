const Container = ({ className, ...props }) => (
  <div className={`${className} max-w-2xl mx-auto`} {...props} />
)

export default Container
