export const gamesRoutes = {
  ticTacToe: "/games/tic-tac-toe",
  pong: "/games/pong",
} as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  notFound: "/*",
  //  games routes
  gamesRoutes: gamesRoutes,
} as const;
