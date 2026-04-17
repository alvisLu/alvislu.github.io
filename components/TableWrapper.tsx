const TableWrapper = ({ children }) => {
  return (
    <div className="my-4 w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
        {children}
      </table>
    </div>
  )
}

export default TableWrapper
