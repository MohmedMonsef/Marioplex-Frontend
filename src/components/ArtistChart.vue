<script>
import { mapGetters } from "vuex";
import { Bar } from "vue-chartjs";
/**
 * Displays Artist number of Followers Chart
 * @displayName Artist Followers Chart
 * @example [none]
 */
export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ["Day", "Month", "Year"],
        datasets: [
          {
            label: "Number of Followers",
            backgroundColor: "#172847",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF"
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  async created() {
    await this.$store.dispatch(
      "ArtistPage/numberoffollowers",
      this.$route.params.artist_id
    );
    this.datacollection.datasets[0].data = this.artist_followers;
    this.numFollowers();
  },
  methods: {
    /**
     * get number of followers for the artist for the current day, month and year
     * @public This is a public method
     */
    numFollowers() {
      this.options.update;
      this.datacollection.update;
      if (this.loadedchart == true)
        this.renderChart(this.datacollection, this.options);
    }
  },
  computed: {
    ...mapGetters({
      artist_followers: "ArtistPage/artist_followers",
      loadedchart: "ArtistPage/loadedchart"
    })
  }
};
</script>
