import React, { Component } from 'react'
import { Icon, Table, Segment } from 'semantic-ui-react'
import _ from 'lodash'
export class Custom extends Component {
    state = {
        data: {"JO-2THQ-54WH":[{"id":42017,"sku":"JO-2THQ-54WH","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":526,"created_at":"2019-09-09T14:01:38.219Z"},{"id":1583,"sku":"JO-2THQ-54WH","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":476,"created_at":"2019-09-03T18:22:26.871Z"}],"5F-10I9-DKT8":[{"id":42016,"sku":"5F-10I9-DKT8","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":476,"created_at":"2019-09-09T14:01:38.219Z"},{"id":1453,"sku":"5F-10I9-DKT8","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":526,"created_at":"2019-09-03T18:22:26.871Z"}],"SX-73DP-MFWJ":[{"id":42015,"sku":"SX-73DP-MFWJ","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":716,"created_at":"2019-09-09T14:01:38.219Z"},{"id":1417,"sku":"SX-73DP-MFWJ","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":830,"created_at":"2019-09-03T18:22:26.871Z"}],"QS-JVD2-CQKP":[{"id":41490,"sku":"QS-JVD2-CQKP","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":754,"created_at":"2019-09-07T14:01:42.614Z"},{"id":1492,"sku":"QS-JVD2-CQKP","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":792,"created_at":"2019-09-03T18:22:26.871Z"}],"AO-7B77-FPOW":[{"id":41083,"sku":"AO-7B77-FPOW","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":754,"created_at":"2019-09-06T14:02:42.889Z"},{"id":1403,"sku":"AO-7B77-FPOW","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":792,"created_at":"2019-09-03T18:22:26.871Z"}],"O3-FK3B-8XMY":[{"id":41082,"sku":"O3-FK3B-8XMY","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":640,"created_at":"2019-09-06T14:02:42.889Z"},{"id":37116,"sku":"O3-FK3B-8XMY","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":678,"created_at":"2019-09-04T14:02:38.007Z"}],"MF-V551-2XH5":[{"id":41081,"sku":"MF-V551-2XH5","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":678,"created_at":"2019-09-06T14:02:42.889Z"},{"id":1560,"sku":"MF-V551-2XH5","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":640,"created_at":"2019-09-03T18:22:26.871Z"}],"VT-RRVA-IDJ2":[{"id":40806,"sku":"VT-RRVA-IDJ2","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":526,"created_at":"2019-09-05T14:02:22.788Z"},{"id":1570,"sku":"VT-RRVA-IDJ2","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":564,"created_at":"2019-09-03T18:22:26.871Z"}],"O4-A5E8-FHRE":[{"id":40802,"sku":"O4-A5E8-FHRE","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":830,"created_at":"2019-09-05T14:02:22.788Z"},{"id":1468,"sku":"O4-A5E8-FHRE","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":754,"created_at":"2019-09-03T18:22:26.871Z"}],"2V-7LFT-N16B":[{"id":40798,"sku":"2V-7LFT-N16B","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":754,"created_at":"2019-09-05T14:02:22.788Z"},{"id":1538,"sku":"2V-7LFT-N16B","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":640,"created_at":"2019-09-03T18:22:26.871Z"}],"IE-U1ZQ-ZA33":[{"id":37148,"sku":"IE-U1ZQ-ZA33","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":564,"created_at":"2019-09-04T14:02:38.007Z"},{"id":1512,"sku":"IE-U1ZQ-ZA33","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":526,"created_at":"2019-09-03T18:22:26.871Z"}],"NN-U97L-ZZE8":[{"id":37132,"sku":"NN-U97L-ZZE8","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":564,"created_at":"2019-09-04T14:02:38.007Z"},{"id":1576,"sku":"NN-U97L-ZZE8","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":526,"created_at":"2019-09-03T18:22:26.871Z"}],"35-FPXE-95ZZ":[{"id":37122,"sku":"35-FPXE-95ZZ","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":526,"created_at":"2019-09-04T14:02:38.007Z"},{"id":1501,"sku":"35-FPXE-95ZZ","product_name":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","expected_fulfillment_fee_per_unit":476,"created_at":"2019-09-03T18:22:26.871Z"}]}
    }
    render() {
        const { data } = this.state
        return (
            <div>
                {
                    Object.keys(data).length === 0 ?
                        <Segment style={{ marginTop: "100px" }}>
                            <p>There is no data to display</p>
                        </Segment>
                        :

                        <Table >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Sku</Table.HeaderCell>
                                    <Table.HeaderCell>Product Name</Table.HeaderCell>
                                    <Table.HeaderCell>Last Fee</Table.HeaderCell>
                                    <Table.HeaderCell>New Fee</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    Object.keys(data).map(row => {
                                        const oldFee = _.maxBy(data[row], "id").expected_fulfillment_fee_per_unit
                                        const newFee = _.minBy(data[row], "id").expected_fulfillment_fee_per_unit
                                        return (
                                            <Table.Row>
                                                <Table.Cell>{data[row][0].sku}</Table.Cell>
                                                <Table.Cell>{data[row][0].product_name}</Table.Cell>
                                                <Table.Cell>{oldFee / 100.0}</Table.Cell>
                                                <Table.Cell
                                                    style={{ color: (parseInt(newFee) > parseInt(oldFee)) ? "red" : "green" }}
                                                >
                                                    <Icon
                                                        name={parseInt(newFee) > parseInt(oldFee) ? "long arrow alternate up" : "long arrow alternate down"}
                                                    />
                                                    {newFee / 100.0}
                                                </Table.Cell>
                                            </Table.Row>
                                        )

                                    })
                                }


                            </Table.Body>
                        </Table>

                }
            </div>
        )
    }
}

export default Custom
