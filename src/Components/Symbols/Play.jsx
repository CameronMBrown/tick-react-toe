import { useContext } from "react"
import ThemeContext from "../../store/ThemeContext"

function Play({ fill = "#000000", solid = true, onClick }) {
  const themeCtx = useContext(ThemeContext)

  let stroke = "#000000"
  if (fill === "#000000" && solid) {
    fill = themeCtx.darkMode ? "#FFFFFF" : "#000000"
  } else if (!solid) {
    stroke = fill
    fill = "none"
  }

  return (
    <svg
      viewBox="0 0 72 72"
      id="emoji"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      onClick={onClick || null}
      className="play-icon"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="color"></g>
        <g id="hair"></g>
        <g id="skin"></g> <g id="skin-shadow"></g>
        <g id="line">
          <path
            fill={fill}
            stroke={stroke}
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M19.5816,55.6062 c0.4848,0.1782,1.0303,0.297,1.5758,0.297c0.8485,0,1.697-0.297,2.4242-0.7722l30-15.9793l0.303-0.297 c0.7879-0.7722,1.2121-1.7227,1.2121-2.7919c0-1.0692-0.4242-2.0791-1.2121-2.7919l-0.303-0.297l-30-16.0981 c-1.0909-0.8316-2.6667-1.0098-4-0.4752c-1.5152,0.594-2.4848,2.0791-2.4848,3.683v31.8397 C17.0967,53.5272,18.0664,55.0122,19.5816,55.6062z"
          ></path>
        </g>
      </g>
    </svg>
  )
}
export default Play
