export default async function auth(to, from, next) {
    const token = localStorage.getItem('token');

    if(!token){
        next({ name: 'Login' })
        return
    }
    return next();
  }