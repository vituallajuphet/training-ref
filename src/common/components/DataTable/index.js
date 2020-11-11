import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import {
  Head,
  Body,
  Foot
} from './components/index'

function DataTable(props) {
  const { className, headings, rows } = props

  return (
    <div className={cn('dataTable', className)}>
      <table>

        <Head headings={headings} />
        <Body rows={rows} />
        <Foot />

      </table>
    </div>
  )
}

const StyledDataTable = styled(DataTable, 'dataTable')`
  width: 100%;
  height: auto;
  padding: 0 1rem;
  margin-bottom: 60px;

  table {
    width: 100%;
    margin-bottom: 60px;
    border-collapse: collapse;
    position: relative;

    thead {
      background-color: #33363e;
      border-bottom: 3px solid rgba(72, 80, 90, 0.5);

      tr {
        td {
          height: 60px;
          padding-left: 1rem;
          padding-right: 1rem;
          color: #99a0ad;

          &:first-child {
            border-top-left-radius: 0.3em;
          }

          &:last-child {
            border-top-right-radius: 0.3em;
          }
        }
      }
    }

    tbody {
      background-color: rgba(51, 54, 62, 0.3);
      background-color: #33363e;

      tr {
        background-color: transparent;
        // border-bottom: 1px solid #393e46;
        transition: all 0.075s ease-in;

        &:focus {
          outline: none;
          background-color: #30333c;
        }

        &:hover,
        &:active {
          background-color: #30333c;

          td {
            color: #ffffff;
          }
        }

        td {
          height: 60px;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }
    }

    tfoot {
      position: absolute;
      bottom: -60px;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #33363e;
      border-top: 1px solid rgba(72, 80, 90, 0.1);
      border-bottom-left-radius: 0.3em;
      border-bottom-right-radius: 0.3em;

      .footer {
        width: 100%;
        height: 60px;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        // footer__rppLabel
        &__rppLabel {
          margin: 0;
          margin-right: 0.5rem;
          color: #99a0ad;
          font-size: 0.9rem;

        }

        // footer__rppSelect
        &__rppSelect {
          min-width: 80px;
          max-width: 100px;
          height: 35px;
          color: #99a0ad;
          border-radius: 0.3rem;
          background-color: transparent;
          border: 1px solid #3d434c;
          transition: color 0.15s ease-in;

          &:focus {
            outline: none;
            color: #ffffff;
            border: 1px solid #48505a;
          }

          &:hover {
            border: 1px solid #48505a;
          }

          option {
            background-color: #2c3038;
          }
        }
      }
    }
  }
`

export default StyledDataTable