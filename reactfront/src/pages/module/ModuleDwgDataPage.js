import React from 'react';
import './ModuleSomeDataPage.css'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useNavigate} from "react-router-dom";
import {
    alpha,
    Box,
    Button,
    Checkbox, IconButton,
    Paper, Table, TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Toolbar, Tooltip, Typography
} from "@mui/material";
import {visuallyHidden} from "@mui/utils";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";

function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'photo',
        // numeric: false,
        label: '사진',
    },
    {
        id: 'name',
        numeric: false,
        label: '폴더명',
    },
    {
        id: 'calories',
        numeric: true,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        label: 'Protein (g)',
    },
];

function EnhancedTableHead(props) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const {numSelected} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    디렉터리
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon/>
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const ModuleDwgDataPage = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);

    const btStyle = {
        width: '16vh',
        height: '4.5vh',
        borderRadius: 30,
        fontSize: '2vh',
        fontWeight: 1000,
    };

    const handleFolderClick = () => {
        setOpen(!open);
    };

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div>
            <div className="data_paperContainer">
                <Paper elevation={4} className="data_sidePaper" sx={{borderRadius: 12}}>
                    <div className="data_sideHeader">
                        <h2>도면 데이터 관리</h2>
                    </div>
                    <div className="data_borderLine"></div>
                    <List className="data_folderList"
                          sx={{
                              width: '90%',
                              height: '80%',
                              margin: '1vh',
                          }}
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                    >
                        {/*<ListItemButton>*/}
                        {/*    <div className="data_listIcon">*/}
                        {/*        <img src="/img/icon/folder.png"/>*/}
                        {/*    </div>*/}
                        {/*    <ListItemText primary="홍길동_DWG"/>*/}
                        {/*</ListItemButton>*/}
                        <ListItemButton onClick={handleFolderClick}
                                        className="data_ListButton"
                        >
                            <div className="data_listIcon">
                                <img src="/img/icon/folder.png"/>
                            </div>
                            <ListItemText primary="홍길동_DWG"
                                          className="data_listName"
                            />
                            {open ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{pl: 4}}
                                                className="data_ListButton"
                                >
                                    <div className="data_listIcon">
                                        <img src="/img/icon/folder.png"/>
                                    </div>
                                    <ListItemText primary="하위폴더1"
                                                  className="data_listName"
                                    />
                                </ListItemButton>
                                <ListItemButton sx={{pl: 4}}
                                                className="data_ListButton"
                                >
                                    <div className="data_listIcon">
                                        <img src="/img/icon/folder.png"/>
                                    </div>
                                    <ListItemText primary="하위폴더2"
                                                  className="data_listName"
                                    />
                                </ListItemButton>
                                <ListItemButton sx={{pl: 4}}
                                                className="data_ListButton"
                                >
                                    <div className="data_listIcon">
                                        <img src="/img/icon/folder.png"/>
                                    </div>
                                    <ListItemText primary="하위폴더3"
                                                  className="data_listName"
                                    />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Paper>
                <Paper elevation={4} className="data_mainPaper" sx={{borderRadius: 12}}>
                    <div className="data_buttonField">
                        <Button variant="contained"
                                sx={{
                                    ...btStyle,
                                    backgroundColor: '#8CD8E9',
                                    '&:hover': {
                                        backgroundColor: '#6BA3AF'
                                    }
                                }}
                                onClick={() => navigate("")}
                        >
                            업로드
                        </Button>
                        <Button variant="contained"
                                sx={{
                                    ...btStyle,
                                    backgroundColor: '#A9D18E',
                                    '&:hover': {
                                        backgroundColor: '#7C9A67'
                                    }
                                }}
                                onClick={() => navigate("")}
                        >
                            다운로드
                        </Button>
                        <Button variant="contained"
                                sx={{
                                    ...btStyle,
                                    backgroundColor: '#D1D1D1',
                                    '&:hover': {
                                        backgroundColor: '#858585'
                                    }
                                }}
                                onClick={() => navigate("")}
                        >
                            삭제
                        </Button>
                    </div>
                    <div className="data_directoryFiled">
                        <Box sx={{width: '91%'}} className="data_directoryBox">
                            <Paper sx={{width: '100%', mb: 0}}>
                                <EnhancedTableToolbar numSelected={selected.length}/>
                                <TableContainer>
                                    <Table
                                        sx={{
                                            width: '100%',
                                        }}
                                        aria-labelledby="tableTitle"
                                        size={'medium'}
                                    >
                                        <EnhancedTableHead
                                            numSelected={selected.length}
                                            order={order}
                                            orderBy={orderBy}
                                            onSelectAllClick={handleSelectAllClick}
                                            onRequestSort={handleRequestSort}
                                            rowCount={rows.length}
                                        />
                                    </Table>
                                </TableContainer>
                                <TableContainer
                                    sx={{
                                        height: '47vh',
                                        overflow: 'auto',
                                        overflowX: 'hidden',
                                    }}
                                >
                                    <Table
                                        sx={{
                                            width: '100%',
                                        }}
                                        aria-labelledby="tableTitle"
                                        size={'medium'}
                                    >
                                        <TableBody>
                                            {stableSort(rows, getComparator(order, orderBy))
                                                .map((row, index) => {
                                                    const isItemSelected = isSelected(row.name);
                                                    const labelId = `enhanced-table-checkbox-${index}`;

                                                    return (
                                                        <TableRow
                                                            hover
                                                            onClick={(event) => handleClick(event, row.name)}
                                                            role="checkbox"
                                                            aria-checked={isItemSelected}
                                                            tabIndex={-1}
                                                            key={row.name}
                                                            selected={isItemSelected}
                                                        >
                                                            <TableCell padding="checkbox">
                                                                <Checkbox
                                                                    color="primary"
                                                                    checked={isItemSelected}
                                                                    inputProps={{
                                                                        'aria-labelledby': labelId,
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell className="photoBox">
                                                                <img src="/img/icon/folder.png"/>
                                                            </TableCell>
                                                            <TableCell
                                                                component="th"
                                                                id={labelId}
                                                                scope="row"
                                                                padding="none"
                                                            >
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell align="right">{row.calories}</TableCell>
                                                            <TableCell align="right">{row.fat}</TableCell>
                                                            <TableCell align="right">{row.carbs}</TableCell>
                                                            <TableCell align="right">{row.protein}</TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            {
                                                <TableRow
                                                    style={{
                                                        height: (53)
                                                    }}
                                                >
                                                    <TableCell colSpan={6}/>
                                                </TableRow>
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Box>
                    </div>
                </Paper>
            </div>
        </div>
    );
};

export default ModuleDwgDataPage;
