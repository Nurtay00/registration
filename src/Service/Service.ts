export async function login(ans: object) {
  return await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(ans),
  }).then((ans) => {
    if (ans.status === 200) {
      alert("you in system");
    } else {
      alert("incorrect password or username");
    }
  });
}
export async function regist(ans: object) {
  console.log(ans);
  return await fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(ans),
  }).then((ans) => {
    if (ans.status === 200) {
      alert("you in system");
    } else {
      alert("incorrect password or username");
    }
  });
}
