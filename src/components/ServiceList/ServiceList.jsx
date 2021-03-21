import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { serviceRemove } from '../../actions/actionsCreators'
import styled from 'styled-components'

const Ul = styled.ul`
  margin: 30px 0;
  padding: 0;
`
const Li = styled.li`
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  list-style-position: inside;
  box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);

  :not(:first-child) {
    margin-top: 15px;
  }
`
const ItemName = styled.div`
  width: 65%;
`
const ItemPrice = styled.div`
  width: 15%;
`
const Button = styled.button`
  width: 5%;
  padding: 5px;
  cursor: pointer;
  color: white;
  font-size: inherit;
  background-color: #0fc7ff;
  border-style: none;

  :hover {
    background-color: #02a7da;
  }
`
const ButtonDelete = styled(Button)`
  background-color: #ff6161;

  :hover {
    background-color: #e70000;
  }
`

function ServiceList(props) {
  const items = useSelector((state) => state.serviceList)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(serviceRemove(id))
  }

  return (
    <Ul>
      {items.map((o) => (
        <Li key={o.id}>
          <ItemName>{o.name}</ItemName>
          <ItemPrice>{o.price}</ItemPrice>
          <Button>🖉</Button>
          <ButtonDelete onClick={() => handleRemove(o.id)}>✕</ButtonDelete>
        </Li>
      ))}
    </Ul>
  )
}

ServiceList.propTypes = {}

export default ServiceList
