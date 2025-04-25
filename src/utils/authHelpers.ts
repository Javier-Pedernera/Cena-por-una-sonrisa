export function isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  
  export const isAdmin = (): boolean => {
    const user = localStorage.getItem('user');
    // console.log("user en is admin", user);
    
    if (!user) return false;
    try {
      const parsed = JSON.parse(user);
      const roles = parsed.roles || [];
      return roles.some((role: any) => role.role_name === "admin");
    } catch {
      return false;
    }
  };

  export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }