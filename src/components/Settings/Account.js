import { useCurrentUser } from '../../hooks/auth'

import StackLayout from '../Layout/Stack'

const Account = () => {
  const currentUser = useCurrentUser()
  return (
    <StackLayout title="アカウント情報" parent="/settings">
      {!currentUser && <div className="py-12 text-center">ログインしていません</div>}
      {currentUser && (
          <>
            <div className="px-2 border-b mb-4 pb-1">
              <div className="mb-1 text-sm text-gray-500">uid</div>
              <div>{currentUser.uid}</div>
            </div>
            <div className="px-2 border-b mb-4 pb-1">
              <div className="mb-1 text-sm text-gray-500">displayName</div>
              <div>{currentUser.displayName || 'N/A'}</div>
            </div>
          </>
      )}
    </StackLayout>
  )
}

export default Account
