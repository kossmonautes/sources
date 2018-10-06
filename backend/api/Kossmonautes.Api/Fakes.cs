using Kossmonautes.Api.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kossmonautes.Api
{
    public class Fakes
    {
        public static List<People> Peoples()
        {
            List<People> people = new List<People>();
            people.Add(People.Of("john"));
            people.Add(People.Of("alice"));
            people.Add(People.Of("kurt"));
            people.Add(People.Of("eve"));
            return people;
        }
    }
}
