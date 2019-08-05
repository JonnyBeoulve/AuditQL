import React from "react";
import { Query } from "react-apollo";
import { Box, Card, Flex, Heading, Text } from "rebass";
import { DocumentText } from "styled-icons/typicons/DocumentText";
import { Table } from "styled-icons/boxicons-regular/Table";
import ClipLoader from "react-spinners/ClipLoader";

import { getAuditsQuery } from "../../api/queries";
import { DefaultButton } from "../../theme/base";
import GenreRadialChart from "../Charts/GenreRadialChart/GenreRadialChart";
import AuditListText from "./AuditListText/AuditListText";
import AddAuditModal from "../Modals/AddAuditModal/AddAuditModal";
import AuditListGraph from "../Graphs/AuditListGraph/AuditListGraph";

/* This component will display a list of audits and a graph. The format of the list
will either be text or table depending upon a togglable state housed in the parent component. */
const AuditList = ({ auditListFormat, selectAudit, selectAuditListFormat }) => (
  <Query query={getAuditsQuery}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <Flex mt={[30, 50]} justifyContent={"center"}>
            <ClipLoader
              sizeUnit={"px"}
              size={200}
              color={"#00abbd"}
              loading={loading}
            />
          </Flex>
        );
      if (error)
        return (
          <Card mt={[30, 50]}>
            <Text>Error! {error.message}</Text>
          </Card>
        );

      return (
        <main>
          <Card mt={[30, 50]} mb={50}>
            <Flex width={1} justifyContent={"space-between"}>
              <Heading>All Audits</Heading>
              <Flex justifyContent={"flex-end"}>
                <DefaultButton
                  ml={"5px"}
                  style={{
                    backgroundColor: !auditListFormat ? "#00abbd" : null
                  }}
                  onClick={() => selectAuditListFormat(0)}
                >
                  <Table size={16} />
                </DefaultButton>
                <DefaultButton
                  ml={"5px"}
                  style={{
                    backgroundColor: auditListFormat ? "#00abbd" : null
                  }}
                  onClick={() => selectAuditListFormat(1)}
                >
                  <DocumentText size={16} />
                </DefaultButton>
                <AddAuditModal
                  buttonText={"Add Audit"}
                  titleText={"Add an audit"}
                  bodyText={"Enter the parameters for the audit below."}
                  confirmText={"Submit"}
                  cancelText={"Cancel"}
                />
              </Flex>
            </Flex>
            {auditListFormat ? (
              <AuditListText data={data} selectAudit={selectAudit} />
            ) : (
              <AuditListGraph data={data.audits} />
            )}
            <Box mb={50}>
              <Heading mb={3}>Audit Genre Frequency</Heading>
              <GenreRadialChart data={data} />
            </Box>
          </Card>
        </main>
      );
    }}
  </Query>
);

export default AuditList;
