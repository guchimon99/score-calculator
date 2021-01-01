const NotFound = ({ location }) => (
  <div className="py-8 px-4 max-w-2xl mx-auto">
    <div className="font-bold text-lg mb-2">Not found</div>
    <div className="p-2 text-sm text-gray-500 my-4 roudned bg-gray-100">{location.pathname}</div>
    <div className="text-gray-600 text-sm">ページが見つかりませんでした</div>
  </div>
)
export default NotFound
