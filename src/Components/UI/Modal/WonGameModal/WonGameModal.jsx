import { useContext, useState } from "react"

// context
import GameStateContext from "../../../../store/GameStateContext"

// components
import Button from "../../Button/Button"
import Modal from "../Modal"

// styles
import "./WonGameModal.scss"

function WonGameModal({ winner, children }) {
  const gameCtx = useContext(GameStateContext)
  const [showModal, setShowModal] = useState(true)

  const handleRematch = () => {
    setShowModal(false)
    gameCtx.reset()
  }

  winner = localStorage.getItem(winner) ?? winner

  if (!showModal) return

  return (
    <Modal className="won-game-modal" open={showModal}>
      <h3>{winner} is the Winner!</h3>
      {children}
      <div className="modal-buttons">
        <Button action={() => setShowModal(false)}>View Board</Button>
        <Button action={handleRematch}>Rematch</Button>
      </div>
    </Modal>
  )
}
export default WonGameModal
