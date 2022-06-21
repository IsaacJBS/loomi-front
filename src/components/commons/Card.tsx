import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Tag from "./Tag";
import CustomSpinner from "../../helpers/CustomSpinner";

interface IProps {
  title: string;
  text: string;
  overdue: boolean;
  bold: boolean;
  semiBold: boolean;
  value: string | number;
  secondValue: string | number;
  tag: string;
  loading: boolean;
  percent: boolean;
}

function Card({
  title,
  text,
  overdue,
  bold,
  semiBold,
  value,
  secondValue,
  tag,
  loading,
  percent,
}: IProps) {
  return (
    <Flex>
      <Box
        w={220}
        h={160}
        borderRadius="15px"
        p={3}
        backgroundColor="bgWhite"
        boxShadow="sm"
      >
        {loading && <CustomSpinner size="sm" />}
        {!loading && (
          <>
            <Text fontFamily="body" fontWeight="bold">
              {title}
            </Text>
            <Tag
              color={overdue ? "#D6628E" : "#109E8E"}
              text={tag}
              percent={percent}
            />
            <Text color={overdue ? "#D6628E" : "#109E8E"} mt={2}>
              {text}
            </Text>
            <Flex mt={3} gap={3}>
              <Text
                fontFamily="body"
                fontWeight={semiBold ? "semi-bold" : "bold"}
              >
                {value}
              </Text>
              <Text fontFamily="body" fontWeight={bold ? "bold" : "semi-bold"}>
                {secondValue}
              </Text>
            </Flex>
          </>
        )}
      </Box>
    </Flex>
  );
}

export default Card;
