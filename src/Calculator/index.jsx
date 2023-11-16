import { useToolKit } from "@webx/toolkit"

import usePartitions from "~/partitions"
import Layout from "./Layout"

import "./scss/stylesheet.scss"
import "./stylesheet.scss"


export default function () {
    usePartitions()

    return <Layout />
}
