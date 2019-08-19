export const validateInput = (query) => {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(query.length && !format.test(query)) {
      return true;
    }else {
      return false
    }
  }