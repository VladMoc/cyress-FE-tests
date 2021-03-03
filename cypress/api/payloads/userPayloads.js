export function usersPayload(type) {
  let createUsersPayload = {
    username: "Be the QA",
    email: "betheqa@email.com",
    address: "Random place to stay",
    active: true
  }

  switch (type) {
    case "create":
      return createUsersPayload;
    case "create-one":
      return {
        ...createUsersPayload, username: "Be the QA - 1 user"
      }
  }
}