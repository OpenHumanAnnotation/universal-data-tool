// @flow weak

import React, { memo, useCallback, useReducer, useEffect } from "react"
import useEventCallback from "use-event-callback"
import { useLocalStorage } from "react-use"
import { styled } from "@material-ui/core/styles"
import range from "lodash/range"
import * as colors from "@material-ui/core/colors"
import classNames from "classnames"
import TablePagination from "@material-ui/core/TablePagination"
import Box from "@material-ui/core/Box"
import getBrushColorPalette from "../../utils/get-brush-color-palette"

const Container = styled("div")({
  flexWrap: "wrap",
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
})
const EmptyState = styled("div")({
  fontSize: 24,
  color: colors.grey[500],
  padding: 30,
  textAlign: "center",
})
const SampleDiv = styled("div")(({ color }) => ({
  color: "#fff",
  fontVariantNumeric: "tabular-nums",
  margin: 4,
  padding: 4,
  backgroundColor: color[500],
  display: "inline-flex",
  fontSize: 14,
  fontWeight: 500,
  textAlign: "center",
  justifyContent: "center",
  minWidth: "3em",
  borderRadius: 3,
  cursor: "pointer",
  userSelect: "none",
  transition:
    "box-shadow 200ms ease, transform 200ms ease, background-color 200ms ease",
  "&:hover": {
    backgroundColor: color[700],
  },
  // color: color.isFaded ? "#000" : "#fff",
  "&.selected": {
    backgroundColor: color[700],
    boxShadow: `0px 0px 2px 1px ${color["A200"]}`,
    transform: "scale(1.05,1.05)",
  },
}))

const Sample = memo(
  ({
    index,
    onClick,
    completed,
    selected,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    brush,
  }) => {
    return (
      <SampleDiv
        className={classNames({ completed, selected })}
        onClick={() => onClick(index)}
        onMouseDown={() => onMouseDown(index)}
        onMouseUp={() => onMouseUp(index)}
        onMouseEnter={() => onMouseEnter(index)}
        color={getBrushColorPalette(brush)}
        id={"sample" + index}
      >
        {index}
      </SampleDiv>
    )
  },
  function (p, n) {
    return (
      p.index === n.index &&
      p.completed === n.completed &&
      p.selected === n.selected &&
      p.brush === n.brush
    )
  }
)

export default ({ samples, onClick, tablePaginationPadding = 0 }) => {
  const [samplesPerPage, changeSamplesPerPage] = useLocalStorage(
    "samplesPerPage",
    100
  )
  const [sampleOffset, changeSampleOffset] = useLocalStorage("sampleOffset", 0)

  useEffect(() => {
    if (sampleOffset > samples.length) {
      changeSampleOffset(0)
    }
  }, [changeSampleOffset, sampleOffset, samples.length])

  const [selectRange, changeSelectRange] = useReducer((state, newValue) => {
    if (newValue === null) return null
    if (typeof newValue === "number") {
      if (!state) return null
      return [Math.min(newValue, state[0]), Math.max(newValue + 1, state[1])]
    }
    return newValue
  }, null)

  const startSelectRange = useCallback(
    (index) => changeSelectRange([index, index + 1]),
    [changeSelectRange]
  )
  const moveSelectRange = useCallback((index) => changeSelectRange(index), [
    changeSelectRange,
  ])
  const endSelectRange = useCallback(() => {}, [])
  const checkAndNullifySelectRange = useCallback(
    (e) => {
      if (e.buttons !== 1) {
        changeSelectRange(null)
      }
    },
    [changeSelectRange]
  )
  const onClickMemo = useEventCallback(onClick)

  return (
    <Container
      onMouseUp={checkAndNullifySelectRange}
      onMouseEnter={checkAndNullifySelectRange}
    >
      {samples.length === 0 && (
        <EmptyState>
          No samples, try using "Import Toy Dataset" in Samples > Import
        </EmptyState>
      )}
      <Box flexGrow={1}>
        {range(
          sampleOffset,
          Math.min(samples.length, sampleOffset + samplesPerPage)
        ).map((i) => (
          <Sample
            onClick={onClickMemo}
            key={i}
            index={i}
            completed={samples[i]?.hasAnnotation}
            brush={
              samples[i]?.hasAnnotation
                ? samples[i].brush || "complete"
                : "incomplete"
            }
            selected={selectRange && i >= selectRange[0] && i < selectRange[1]}
            onMouseDown={startSelectRange}
            onMouseEnter={moveSelectRange}
            onMouseUp={endSelectRange}
          />
        ))}
        {sampleOffset + samplesPerPage < samples.length && (
          <>
            {range(3).map((i) => (
              <Sample
                onClick={() => {
                  changeSampleOffset(sampleOffset + samplesPerPage)
                }}
                key={sampleOffset + samplesPerPage + i}
                selected={false}
                brush={`ellipsis${i + 1}`}
                index={sampleOffset + samplesPerPage + i}
                completed={false}
                onMouseEnter={() => {}}
                onMouseDown={() => {}}
                onMouseUp={() => {}}
              />
            ))}
            <Box textAlign="center" marginTop="16px" color={colors.grey[700]}>
              More Samples on Next Page
            </Box>
          </>
        )}
      </Box>
      <Box paddingRight={tablePaginationPadding}>
        <TablePagination
          rowsPerPageOptions={[100, 250, 500, 1000, 2000, 10000]}
          component="div"
          count={samples.length}
          rowsPerPage={samplesPerPage}
          page={Math.floor(sampleOffset / samplesPerPage)}
          labelRowsPerPage="Samples per Page:"
          onChangePage={(e, newPage) =>
            changeSampleOffset(newPage * samplesPerPage)
          }
          onChangeRowsPerPage={(e) => {
            changeSampleOffset(0)
            changeSamplesPerPage(+e.target.value)
          }}
        />
      </Box>
    </Container>
  )
}
