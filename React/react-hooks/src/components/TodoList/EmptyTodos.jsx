import React, { memo } from 'react'

const EmptyTodos = () => (
  <p className="empty-todos">
    No todo found
  </p>
)

export default memo(EmptyTodos)
