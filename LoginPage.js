async function loginUser(token) {
  const response = await fetch("/api/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  return response.json();
}
