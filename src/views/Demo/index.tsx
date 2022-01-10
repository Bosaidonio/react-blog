import React, { useState } from 'react'
import { useRequest } from 'ahooks'
import { getData } from '@/api'
const Demo = () => {
  const [state, setState] = useState('')

  const { loading, run } = useRequest(getData, {
    manual: true,
    onSuccess: (result) => {
      if (result.code === 1) {
        console.log(result)
        setState('')
      }
    },
  })

  return (
    <div>
      <input onChange={(e) => setState(e.target.value)} value={state} placeholder="Please enter username" style={{ width: 240, marginRight: 16 }} />
      <button disabled={loading} type="button" onClick={() => run()}>
        {loading ? 'Loading' : 'Edit'}
      </button>
    </div>
  )
}
export default Demo
