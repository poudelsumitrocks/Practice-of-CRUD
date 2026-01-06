
import UserForm from '../../../components/usersData/UserForm'
export default function page({ onSuccess, onClose }) {
  
  const handleSubmit = (item) => {
    onSuccess(item)
  }
  return (
    <div>
      <UserForm onSubmit={handleSubmit}
        onClose={onClose} />
        
    </div>
  )
}
