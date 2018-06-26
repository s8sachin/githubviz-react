export const ROOT_URL = 'http://localhost:8000'

export const headers = () => {
  return {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    'Email': localStorage.getItem('email'),
    'Content-Type': 'application/json'
  };
}