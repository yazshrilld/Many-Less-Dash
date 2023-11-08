import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

const BaseTable = ({
  rows,
  columns,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="container w-full overflow-hidden mt-4 font-jakarta">
      <TableContainer sx={{ maxHeight: "440" }}>
        <Table stickyHeader aria-label="sticky table" stripe="even">
          <TableHead>
            <TableRow>
              {columns?.map(({ label, minWidth }, idx) => (
                <TableCell
                  key={idx}
                  sx={{
                    fontWeight: 700,
                    fontStyle: "jakarta",
                    bgcolor: "#000000",
                    color: "#FDB815",
                    minWidth: minWidth,
                  }}
                >
                  {label}
                </TableCell>
              ))}
              {true && (
                <TableCell
                  sx={{
                    fontWeight: 700,
                    bgcolor: "#000000",
                  }}
                >
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#FDB815",
                      "&.Mui-checked": {
                        color: "#FDB815",
                      },
                    }}
                  />
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, indx) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={indx}
                    style={{ fontSize: "0.8rem" }}
                  >
                    {
                      console.log({row})
                    }
                    {columns?.map((cols, idx) => {
                      // console.log(row);
                      const seenas = cols;
                      console.log({ seenas });
                      const check = row[idx]
                      // console.log({check})
                      return (
                        <TableCell key={cols.ld} style={{ fontSize: "0.8rem" }}>
                          <span>{check}</span>
                        </TableCell>
                      );
                    })}
                    {true && (
                      <TableCell>
                        <Checkbox
                          defaultChecked
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "#FDB815",
                            },
                          }}
                        />
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        page={page}
        rowsPerPage={rowsPerPage}
        count={rows?.length}
        rowsPerPageOptions={[10, 25, 100]}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      ></TablePagination>
    </div>
  );
};

export default BaseTable;
